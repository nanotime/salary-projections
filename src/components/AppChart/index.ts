import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
  Chart,
  LineController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  LineElement,
  PointElement,
  Tooltip,
  BarElement,
  BarController,
} from 'chart.js';

type ChartType = 'bar' | 'line' | 'bubble' | 'doughnut' | 'pie' | 'polarArea' | 'radar' | 'scatter';

@customElement('app-chart')
export class AppChart extends LitElement {
  @property({ type: String })
  chartId: string | undefined = undefined;
  
  @property({ type: String })
  chartType: ChartType = 'line';
  
  @property({ type: Object })
  labels = [];

  @property({ type: Object })
  data = []

  @property({ type: Object })
  options = {}

  constructor() {
    super();
    Chart.register(
      LineController,
      CategoryScale,
      LinearScale,
      LogarithmicScale,
      RadialLinearScale,
      TimeScale,
      TimeSeriesScale,
      LineElement,
      PointElement,
      BarElement,
      BarController,
      Tooltip
    );
  }

  protected firstUpdated(): void {
    const ctx = this.renderRoot.querySelector(`#${this.chartId}`) as HTMLCanvasElement;
    
    new Chart(ctx, {
      type: this.chartType,
      data: {
        labels: this.labels,
        datasets: this.data,
      },
      options: this.options
    });
  }

  protected render(): unknown {
    return html`
      <div>
        <canvas id="${this.chartId}"></canvas>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-chart': AppChart;
  }
}