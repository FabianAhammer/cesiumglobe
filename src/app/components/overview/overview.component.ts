import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Cesium from 'cesium';
import { Viewer } from 'cesium';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, AfterViewInit {

  viewer: Viewer;
  constructor() { }

  ngOnInit(): void {
    Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhMDNjNjAyZS01NWMwLTQ1ZGEtYjliYi03MmYzNWI0OGY1MGYiLCJpZCI6NDYyODgsImlhdCI6MTYxNjAxMTIxNX0.SGSun-wT_OBWH3cBNz9UzDwICM9TwJZOBG0nDeWy-rc";
    let options: Cesium.Viewer.ConstructorOptions = {
      shadows: true,
      animation: false,
      baseLayerPicker: false,
      fullscreenButton: false,
      vrButton: true,
      geocoder: false,
      homeButton: false,
      infoBox: false,
      sceneModePicker: false,
      selectionIndicator: false,
      timeline: false,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false,
      scene3DOnly: true,
      shouldAnimate: true,
      skyBox: null,
      skyAtmosphere: null,
      useDefaultRenderLoop: true,
      targetFrameRate: 120,
      showRenderLoopErrors: false,
      useBrowserRecommendedResolution: true,
      sceneMode: Cesium.SceneMode.SCENE3D,
      requestRenderMode: true,
      maximumRenderTimeChange: null,
    }
    this.viewer = new Cesium.Viewer("globe", options);

    this.viewer.entities.removeAll();
    Cesium.IonResource.fromAssetId(372635)
      .then((resource) => {
        var entity = this.viewer.entities.add({
          position: Cesium.Cartesian3.fromDegrees(13.003360, 47.794249, 0),
          model: {
            uri: resource,
            scale: 15
          },
        });
        this.viewer.trackedEntity = entity;
      });

  }

  ngAfterViewInit() {


  }

}
