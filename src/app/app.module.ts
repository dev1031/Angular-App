import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { PiechartComponent } from './piechart/piechart.component';
import { AccumulationChartModule , PieSeriesService , AccumulationDataLabelService , AccumulationLegendService , AccumulationTooltipService , ChartModule , LineSeriesService } from '@syncfusion/ej2-angular-charts'
import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PiechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule,
    ChartModule,
    AccumulationChartModule,
    MatCardModule

  ],
  providers: [PieSeriesService ,AccumulationDataLabelService , AccumulationLegendService ,AccumulationTooltipService , LineSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
