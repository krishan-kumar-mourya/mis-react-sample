import React from 'react';

function Header() {
  return (
    <div id="global-nav">
      <div id="nav-wrapper">
        <div className="unit main-logo-wrap pointer"><span className="main-logo"></span></div>
        <div className="orglabel"><span>Home</span></div>

        <div className="orglabel"><span>Products</span>
          <div className="orgdrop" style={{width: 326}} data-id="6BD4D0BFC073CF80802582740069C44D">
            <div className="orgdrop-col" style={{minWidth:222}}>
              <ul>
                <li data-ida="28D63F89DFE5A9B38025824B003F0241;0" className="">
                  <a href="#/">Product #1</a></li>
                <li data-ida="75CE95BBF83F750C8025824B003F2DF0;0">
                  <a href="#/">Product #2</a></li>
                <li data-ida="F6B9FC207185B76980257FD2003EBECA;0">
                  <a href="#/">Product #3</a></li>
                <li data-ida="9580CBD1FFE909D98025824B003EBFB7;0">
                  <a href="#/">Product #4</a></li>
                <li data-ida="37A1EA60CBFB89D8802582500044905A;0">
                  <a href="#/">Product #5</a></li>
                <li data-ida="9F819668F2180A998025824B003E9A83;0">
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="orglabel"><span>Services</span>
          <div className="orgdrop" style={{width: 400}} data-id="A38FC7E55B84C082802582740063DBC2">
            <div className="orgdrop-col" style={{width: 180}}>
              <ul>
                <li data-ida="A8A9346757467C2D80258274006378FF;0" className="">
                  <a href="#/">Administration</a></li>
                <li data-ida="94F314E374FEA9008025827400637998;0">
                  <a href="#/">Agriculture</a></li>
                <li data-ida="35AE106DFCFE7C6C8025827400637FD9;0">
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="orglabel"><span>People</span></div>

        <div className="orglabel"><span>About</span></div>

        <div className="orglabel"><span>Contact</span></div>

        <div className="sc-search-wrap">
          <input id="scsearch" placeholder="Search..." className="ui-autocomplete-input"
            autoComplete="off" />
        </div>
      </div>
    </div>
  );
}

export default Header;
