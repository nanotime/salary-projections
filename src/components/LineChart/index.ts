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
} from 'chart.js';

@customElement('app-line-chart')
export class LineChart extends LitElement {
  @property({ type: String })
  chartId: string | undefined = undefined;
  
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
      Tooltip
    );


  }

  protected firstUpdated(): void {
    const ctx = this.renderRoot.querySelector(`#${this.chartId}`) as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: this.data,
      },
      options: this.options
    });

  }

  protected render(): unknown {

    return html`
      <div class="line-chart">
        <canvas id="${this.chartId}"></canvas>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-line-chart': LineChart;
  }
}