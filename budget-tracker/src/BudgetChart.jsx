import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BudgetChart = ({ budget, expenses }) => {
  const chartRef = useRef();

  useEffect(() => {
    const data = [
      { label: 'Budget', value: budget },
      { label: 'Spent', value: expenses }
    ];

    const width = 300;
    const height = 200;
    const margin = { top: 20, right: 20, bottom: 40, left: 50 };

    const svg = d3.select(chartRef.current);
    svg.selectAll('*').remove(); // Clear any previous content

    const chart = svg
      .attr('width', width)
      .attr('height', height);

    const x = d3
      .scaleBand()
      .domain(data.map(d => d.label))
      .range([margin.left, width - margin.right])
      .padding(0.4);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    chart
      .append('g')
      .selectAll('rect')
      .data(data)
      .join('rect')
      .attr('x', d => x(d.label))
      .attr('y', d => y(d.value))
      .attr('height', d => y(0) - y(d.value))
      .attr('width', x.bandwidth())
      .attr('fill', d => (d.label === 'Spent' ? '#f87171' : '#60a5fa'));

    chart
      .append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    chart
      .append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));
  }, [budget, expenses]);

  return (
    <div className="my-4">
      <svg ref={chartRef}></svg>
    </div>
  );
};

export default BudgetChart;
