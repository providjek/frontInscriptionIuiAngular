'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">front-end-inscription-iui documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-398af0292c8605a7b57d2ed5bc3c4126717cd46414619207266c21fe7c050a6c95458105826f30fa3bde77483f06a734e27992fbdf0a90ab82bc57af4e1c92fb"' : 'data-target="#xs-components-links-module-AdminModule-398af0292c8605a7b57d2ed5bc3c4126717cd46414619207266c21fe7c050a6c95458105826f30fa3bde77483f06a734e27992fbdf0a90ab82bc57af4e1c92fb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-398af0292c8605a7b57d2ed5bc3c4126717cd46414619207266c21fe7c050a6c95458105826f30fa3bde77483f06a734e27992fbdf0a90ab82bc57af4e1c92fb"' :
                                            'id="xs-components-links-module-AdminModule-398af0292c8605a7b57d2ed5bc3c4126717cd46414619207266c21fe7c050a6c95458105826f30fa3bde77483f06a734e27992fbdf0a90ab82bc57af4e1c92fb"' }>
                                            <li class="link">
                                                <a href="components/AdminLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminLayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-37fe82f17ae92b374615d0eb869b9bfd24d811729999b7f10332ec8a453b0b0e2c138aed4824a233d6f2eedb6a0f68102664d98bbe840343cee745a3ec7db7e8"' : 'data-target="#xs-components-links-module-AppModule-37fe82f17ae92b374615d0eb869b9bfd24d811729999b7f10332ec8a453b0b0e2c138aed4824a233d6f2eedb6a0f68102664d98bbe840343cee745a3ec7db7e8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-37fe82f17ae92b374615d0eb869b9bfd24d811729999b7f10332ec8a453b0b0e2c138aed4824a233d6f2eedb6a0f68102664d98bbe840343cee745a3ec7db7e8"' :
                                            'id="xs-components-links-module-AppModule-37fe82f17ae92b374615d0eb869b9bfd24d811729999b7f10332ec8a453b0b0e2c138aed4824a233d6f2eedb6a0f68102664d98bbe840343cee745a3ec7db7e8"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationModule.html" data-type="entity-link" >AuthenticationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthenticationModule-e00b4456dd1e84e15a7031f4c3b4f444893e5bb855859028dbd5065bf59442cb35808d4b863602aa6cd807200e7b2b0cbf8654d9e3a6bc40d8023467498f7b41"' : 'data-target="#xs-components-links-module-AuthenticationModule-e00b4456dd1e84e15a7031f4c3b4f444893e5bb855859028dbd5065bf59442cb35808d4b863602aa6cd807200e7b2b0cbf8654d9e3a6bc40d8023467498f7b41"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthenticationModule-e00b4456dd1e84e15a7031f4c3b4f444893e5bb855859028dbd5065bf59442cb35808d4b863602aa6cd807200e7b2b0cbf8654d9e3a6bc40d8023467498f7b41"' :
                                            'id="xs-components-links-module-AuthenticationModule-e00b4456dd1e84e15a7031f4c3b4f444893e5bb855859028dbd5065bf59442cb35808d4b863602aa6cd807200e7b2b0cbf8654d9e3a6bc40d8023467498f7b41"' }>
                                            <li class="link">
                                                <a href="components/LogoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationRoutingModule.html" data-type="entity-link" >AuthenticationRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublicModule-b9db19441d32782a066925f2497fb2f90caec10ee527c53e68ef78e6c2c38d47cb8e56d1c1d6c87853a359e57f8aff92f5d230fe8b17bc3f9be029a9e38d9422"' : 'data-target="#xs-components-links-module-PublicModule-b9db19441d32782a066925f2497fb2f90caec10ee527c53e68ef78e6c2c38d47cb8e56d1c1d6c87853a359e57f8aff92f5d230fe8b17bc3f9be029a9e38d9422"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-b9db19441d32782a066925f2497fb2f90caec10ee527c53e68ef78e6c2c38d47cb8e56d1c1d6c87853a359e57f8aff92f5d230fe8b17bc3f9be029a9e38d9422"' :
                                            'id="xs-components-links-module-PublicModule-b9db19441d32782a066925f2497fb2f90caec10ee527c53e68ef78e6c2c38d47cb8e56d1c1d6c87853a359e57f8aff92f5d230fe8b17bc3f9be029a9e38d9422"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link" >PublicRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/LoginComponent-1.html" data-type="entity-link" >LoginComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});