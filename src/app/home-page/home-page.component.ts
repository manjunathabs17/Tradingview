import { DOCUMENT } from '@angular/common';

import { Component, Inject, Input, OnInit } from '@angular/core';
interface Iframe {
  url: string;
  isFullScreen: boolean;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  url: string = '';
  webPageUrl: string = '';

  searchQuery: string = '';
  searchUrl: string = '';

  sidebarOpen = false;
  sidebarIframes = [
    { url: 'sidebar-iframe1-url' },
    { url: 'sidebar-iframe2-url' },
    { url: 'sidebar-iframe3-url' },
    { url: 'sidebar-iframe4-url' },
  ];

  // showIframe: boolean = false;

  // iframeUrl = 'https://www.w3schools.com/html/';

  // @ViewChildren('myIframe1, myIframe2')
  // iframes!: QueryList<any>;
  // @Input() srcUrl = 'https://in.investing.com/indices/bank-nifty';
  // @Input() iframeId = ''; // Unique ID for each iframe
  // isFullscreen = false;
  // activeIframe: any;

  // constructor() {}

  ngOnInit(): void {}

  // =======================================================1=====================================================

  // iframes: Iframe[] = [
  //   { url: 'https://in.investing.com/indices/sensex', isFullScreen: false },
  //   { url: 'https://in.investing.com/indices/sensex', isFullScreen: false },
  //   { url: 'https://example.com/iframe3', isFullScreen: false },
  //   { url: 'https://example.com/iframe4', isFullScreen: false },
  // ];

  // toggleFullScreen(iframe: Iframe) {
  //   // First, deactivate fullscreen for all iframes
  //   this.iframes.forEach((i) => (i.isFullScreen = false));

  //   // Toggle fullscreen state for the selected iframe
  //   iframe.isFullScreen = !iframe.isFullScreen;

  //   // If the selected iframe is made fullscreen, add a class to the body element to hide other iframes
  //   if (iframe.isFullScreen) {
  //     document.body.classList.add('fullscreen-enabled');
  //   } else {
  //     document.body.classList.remove('fullscreen-enabled');
  //   }
  // }

  // =====================================================2================================================
  iframe1URL = 'https://example.com/iframe1';
  iframe2URL = 'https://example.com/iframe2';
  iframe3URL = 'https://example.com/iframe3';
  iframe4URL = 'https://example.com/iframe4';

  isIframe1FullScreen = false;
  isIframe2FullScreen = false;
  isIframe3FullScreen = false;
  isIframe4FullScreen = false;

  toggleFullScreen(iframeNumber: number) {
    switch (iframeNumber) {
      case 1:
        this.toggleFullscreen(this.isIframe1FullScreen, 'iframe1');
        this.isIframe1FullScreen = !this.isIframe1FullScreen;
        break;
      case 2:
        this.toggleFullscreen(this.isIframe2FullScreen, 'iframe2');
        this.isIframe2FullScreen = !this.isIframe2FullScreen;
        break;
      case 3:
        this.toggleFullscreen(this.isIframe3FullScreen, 'iframe3');
        this.isIframe3FullScreen = !this.isIframe3FullScreen;
        break;
      case 4:
        this.toggleFullscreen(this.isIframe4FullScreen, 'iframe4');
        this.isIframe4FullScreen = !this.isIframe4FullScreen;
        break;
      default:
        break;
    }
  }

  // Function to toggle full-screen using Fullscreen API
  toggleFullscreen(isFullScreen: boolean, iframeId: string) {
    const iframeElement = document.getElementById(iframeId) as HTMLElement;

    if (!isFullScreen) {
      if (iframeElement?.requestFullscreen) {
        iframeElement.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  // Function to exit full-screen
  exitFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  loadWebPage() {
    this.webPageUrl = this.url;
    // console.log(this.webPageUrl);
  }

  search() {
    this.searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      this.searchQuery
    )}`;
    // this.showIframe = true;
  }

  // ========================================================4===================================

  iframeWidth = [300, 300, 300, 300]; // Initial widths for each iframe
  iframeHeight = [200, 200, 200, 200]; // Initial heights for each iframe

  constructor() {}

  resizeIframes(clickedIndex: number) {
    const clickedWidth = this.iframeWidth[clickedIndex - 1];
    const clickedHeight = this.iframeHeight[clickedIndex - 1];

    // Update clicked iframe size
    this.iframeWidth[clickedIndex - 1] = clickedWidth + 50;
    this.iframeHeight[clickedIndex - 1] = clickedHeight + 50;

    // Decrease sizes of other iframes
    for (let i = 0; i < this.iframeWidth.length; i++) {
      if (i !== clickedIndex - 1) {
        this.iframeWidth[i] = 150;
        this.iframeHeight[i] = 100;
      }
    }
  }
}
// url1 = 'https://google.com/search?igu=1';
