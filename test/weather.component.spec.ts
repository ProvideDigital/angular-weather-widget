import { inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { AngularWeatherWidgetModule } from '../src';
import { WeatherContainer } from '../src/weather.container';
import { WeatherApiName } from '../src/services/api/weather.api.service';
import { DemoComponent } from '../demo/demo.component';
import {
  CURRENT_WATHER_MOCK,
  FORECAST_MOCK
} from '../src/mocks/open-weather-map.mock';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule as HttpModule } from '@angular/common/http';
import { HttpClientTestingModule as MockBackend } from '@angular/common/http/testing';

declare var OPEN_WEATHER_MAP_API_KEY: string;
let instance: WeatherContainer, fixture: ComponentFixture<WeatherContainer>;
describe('weather-container', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        AngularWeatherWidgetModule.forRoot({
          key: 'testkey',
          name: WeatherApiName.OPEN_WEATHER_MAP,
          baseUrl: 'http://api.openweathermap.org/data/2.5'
        })
      ],
      providers: [{ provide: null, useClass: MockBackend }]
    });
    fixture = TestBed.createComponent(WeatherContainer);
    instance = fixture.componentInstance;
    instance.settings = new DemoComponent().settings;
  });

  it('should contain info no weather data', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML.trim()).to.contain(
      'No weather data...'
    );
  });

  it('should contain Szczecin as place', () => {
    instance.currentWeather = CURRENT_WATHER_MOCK;
    instance.forecast = FORECAST_MOCK;
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML.trim()).to.contain('Szczecin');
  });
});
