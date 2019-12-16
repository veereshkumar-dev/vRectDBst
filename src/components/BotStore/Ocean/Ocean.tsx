import React, { PureComponent } from 'react';
import './Ocean.scss';
import { OceanProps } from './IOcean';

export default class Ocean extends PureComponent<OceanProps> {
  render() {
    return (
      <div className="wrapper_ocean uk-flex uk-flex-1 ">
        <div className="uk-flex uk-flex-1  ">
          <input type="radio" name="scene" id="scene-1" defaultValue="1" defaultChecked />
          <input type="radio" name="scene" id="scene-2" defaultValue="2" />
          <input type="radio" name="scene" id="scene-3" defaultValue="3" />
          <input type="radio" name="scene" id="scene-4" defaultValue="4" />
          <main id="site" className="uk-flex uk-flex-1 ">
            <header className="top-nav"></header>
            <div className="ocean uk-flex uk-flex-1 ">
              <div className="ocean-text uk-flex uk-flex-1 ">/ Bots Portal</div>
            </div>
            <div className="left-side">
              <div className="page-numbers" data-total>
                <div className="page-number -tens" />
                <div className="page-number -ones">
                  All Bots
                  <br />
                  Bookmarked Bots
                  <br />
                  Most Viewed Bots
                  <br />
                  Coming Soon
                </div>
              </div>
            </div>
            <div className="hero">
              <div className="layer" data-scene={1}>
                <h1 className="heading">Find all your bots here</h1>
              </div>
              <div className="layer" data-scene={2}>
                <h1 className="heading">You can bookmark your bots to save time finding them</h1>
              </div>
              <div className="layer" data-scene={3}>
                <h1 className="heading">These are the in demand bots</h1>
              </div>
              <div className="layer" data-scene={4}>
                <h1 className="heading">Keep a lookout for these awesome new bots</h1>
              </div>
            </div>
            <div className="right-content">
              <nav className="slide-nav">
                <div className="nav-button -prev">
                  <label className="nav-toggle" htmlFor="scene-1">
                    1
                  </label>
                  <label className="nav-toggle" htmlFor="scene-2">
                    2
                  </label>
                  <label className="nav-toggle" htmlFor="scene-3">
                    3
                  </label>
                  <label className="nav-toggle" htmlFor="scene-4">
                    4
                  </label>
                </div>
                <div className="nav-button -next">
                  Next &gt;
                  <label className="nav-toggle" htmlFor="scene-1">
                    1
                  </label>
                  <label className="nav-toggle" htmlFor="scene-2">
                    2
                  </label>
                  <label className="nav-toggle" htmlFor="scene-3">
                    3
                  </label>
                  <label className="nav-toggle" htmlFor="scene-4">
                    4
                  </label>
                </div>
              </nav>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
