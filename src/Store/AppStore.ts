import { observable, computed, action } from 'mobx';
import { differenceWith, sortBy, take, reverse, includes, uniqBy, map, filter } from 'lodash';
var moment = require('moment');
import Source from './BotStore.json';
import { strictEqual } from 'assert';

interface Bot {
  Id: string;
  Title: string;
  Description: string;
  URL: string;
  Icon: string;
  Rating: number;
  Views: number;
  Function: string;
  SBG: string;
  Type: string;

  Status: string;

  ContactName?: string;
  ContactEmail?: string;
  Benefit?: string;
  PDDURL?: string;
  BenefitsCurrentYear?: number;
  BenefitsFiveYears?: number;
  BenefitsStartsOn?: Date;
}

let BotList: Bot[];

const data = <any>Source;

BotList = data.Source.results.map((e, i) => {
  // if (e.raw.sysdocumenttype != 'ListItem') {
  //   return undefined;
  // }
  // let tt: Bot = {
  //   Id: e.raw.botid,
  //   Title: e.title,
  //   Description: e.raw.botdescription,
  //   URL: e.raw.boturl,
  //   Icon: e.raw.boticon,
  //   Rating: parseInt(e.rating),
  //   Views: 20,
  //   Function: e.raw.botfunction,
  //   SBG: e.raw.botsbg,
  //   Type: e.raw.bottype,
  // };

  let tt: Bot = {
    Id: i,
    Title: e.Title,
    Description: e.Description ? e.Description : 'None',
    URL: e.url ? e.url : 'None',
    Icon: e.Icon,
    Rating: parseInt(e.Rating),
    Views: parseInt(e.Views),
    Function: e.Function ? e.Function : 'None',
    SBG: e.SBG ? e.SBG : 'None',
    Type: e.Type ? e.Type : 'None',

    Status: e.Status,

    ContactName: e.Contact,
    ContactEmail: e.ContactEmail,
    PDDURL: e.DesignDocument,
    BenefitsCurrentYear: parseInt(e.BenefitCurrentYear),
    BenefitsFiveYears: parseInt(e.BenefitsFiveYears),
    BenefitsStartsOn: moment(e.BenefitStartOn, 'MM/YY'),
  };

  return tt;
});

BotList;

BotList = BotList.filter(function(el) {
  return el != null;
});

BotList.length;

export enum SiteType {
  BotStore = 1,
  Dashboard,
  KnowledgeBase,
}

export enum BotStoreView {
  AllBots = 1,
  Bookmarked,
  MostViewed,
  ComingSoon,
  Live,
}

interface scoreItem {
  Name: string;
  ImageURL: string;
  Accuracy: number;
  Time: number;
  Score: number;
}

let scoreList: scoreItem[];

class AppStore {
  //--------- ED
  @observable ed_sidebar = false;

  @observable ed_images: scoreItem[] = [];

  edTemp: scoreItem[] = [];

  @observable ed_leaderBoardList = scoreList;

  @action updateLeaderboard(newimages) {
    this.edTemp = [];
    newimages.forEach(element => {
      this.edTemp.push({
        Name: element.split('-')[0].replace('_', ' '),
        ImageURL: 'http://127.0.0.1:8000/files/' + element,
        Accuracy: parseFloat(element.split('-')[1]),
        Time: parseFloat(element.split('-')[2]),
        //Score: ((parseFloat(element.split('-')[2]) * 10) / 30 + parseFloat(element.split('-')[1]) / 100) / 2,
        Score: 30 / parseFloat(element.split('-')[2]),
      });
    });

    this.ed_images = reverse(
      sortBy(this.edTemp, [
        function(o) {
          return o.Score;
        },
      ])
    );
  }

  //------------ Core ---------

  @observable CurrentSite: SiteType = SiteType.KnowledgeBase;
  @observable CurrentBotStoreTab = BotStoreView.AllBots;

  @observable Bots = BotList;

  @observable ShowModal = false;
  @observable DestroyModal = true;

  @action
  toggleDestroyModal() {
    setTimeout(() => {
      this.DestroyModal = true;
    }, 100);
  }

  @observable SearchFilterNormal = '';

  @computed get SearchFilter() {
    return this.SearchFilterNormal.toLowerCase();
  }

  @observable Bookmarked = ['107', '108', '109', '110'];

  @observable Filter_Type = [];
  @observable Filter_SBG = [];
  @observable Filter_Function = [];

  @observable SideFilter = {
    ByType: [],
  };

  @observable
  BotL2 = this.getAllBots;

  @action toggleModal() {
    this.ShowModal = !this.ShowModal;
  }

  @computed get getCurrentFilters() {
    let botSet: Bot[] = [];

    switch (this.CurrentBotStoreTab) {
      case BotStoreView.AllBots:
        botSet = this.Bots;
        break;

      case BotStoreView.Bookmarked:
        botSet = filter(this.Bots, (o: Bot) => {
          return includes(this.Bookmarked, o.Id);
        });
        break;

      case BotStoreView.MostViewed:
        botSet = take(reverse(sortBy(this.Bots, ['Views'])), 5);
        break;

      case BotStoreView.ComingSoon:
        botSet = filter(this.Bots, (o: Bot) => {
          return o.Status != 'Live';
        });
        break;

      case BotStoreView.Live:
        botSet = filter(this.Bots, (o: Bot) => {
          return o.Status == 'Live';
        });

        break;

      default:
        botSet = this.getAllBots;
        break;
    }

    return botSet;
  }

  @computed get getAllBots() {
    let currentAllBots = filter(this.Bots, (o: Bot) => {
      return (
        (this.SearchFilter.length == 0 || includes(o.Title.toLowerCase(), this.SearchFilter)) &&
        (this.Filter_SBG.length == 0 || includes(this.Filter_SBG, o.SBG))
      );
    });

    return currentAllBots;
  }

  @computed get getBookmarkedBots() {
    return filter(this.Bots, (o: Bot) => {
      return includes(this.Bookmarked, o.Id) && includes(o.Title.toLowerCase(), this.SearchFilter);
    });
  }

  @computed get getMostViewedBots() {
    let tmp0 = reverse(sortBy(this.Bots, ['Views']));
    tmp0;

    let tmp = take(tmp0, 5);
    tmp;
    return filter(tmp, (o: Bot) => {
      return includes(o.Title.toLowerCase(), this.SearchFilter);
    });
  }

  @computed get getComingSoonBots() {
    return filter(this.Bots, (o: Bot) => {
      return includes(o.Title.toLowerCase(), this.SearchFilter) && o.Status != 'Live';
    });
  }

  @computed get getLiveBots() {
    return filter(this.Bots, (o: Bot) => {
      return includes(o.Title.toLowerCase(), this.SearchFilter) && o.Status == 'Live';
    });
  }

  @computed get getBots() {
    let botSet: Bot[] = [];

    switch (this.CurrentBotStoreTab) {
      case BotStoreView.AllBots:
        botSet = this.getAllBots;
        break;

      case BotStoreView.Bookmarked:
        botSet = this.getBookmarkedBots;
        break;

      case BotStoreView.MostViewed:
        botSet = this.getMostViewedBots;
        break;

      case BotStoreView.ComingSoon:
        botSet = this.getComingSoonBots;
        break;

      case BotStoreView.Live:
        botSet = this.getLiveBots;
        break;

      default:
        botSet = this.getAllBots;
        break;
    }

    return filter(botSet, (bot: Bot) => {
      return (
        (this.Filter_Type.length == 0 || includes(this.Filter_Type, bot.Type)) &&
        (this.Filter_SBG.length == 0 || includes(this.Filter_SBG, bot.SBG)) &&
        (this.Filter_Function.length == 0 || includes(this.Filter_Function, bot.Function))
      );
    });
  }

  @computed get uniqSBG() {
    return uniqBy(this.getCurrentFilters, 'SBG').map((e: Bot) => {
      return e.SBG;
    });
  }

  @computed get uniqFunction() {
    return uniqBy(this.getCurrentFilters, 'Function').map((e: Bot) => {
      return e.Function;
    });
  }

  @computed get uniqBotTypes() {
    return uniqBy(this.getCurrentFilters, 'Type').map((e: Bot) => {
      return e.Type;
    });
  }

  @action
  toggleTab() {
    this.CurrentBotStoreTab = BotStoreView.MostViewed;
  }
}

export default new AppStore();
