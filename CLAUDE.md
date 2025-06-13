# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a GitHub Pages personal website (okuvshynov.github.io) that hosts an interactive benchmark visualization for LLM inference performance on Apple's MLX framework. It's a static site with no build process required.

## Architecture

The project uses a simple static site structure:
- **Main site**: `index.html` serves as the landing page
- **MLX Benchmark Tool**: Scatter plot visualization
  - `mlxbench/index.html` - Interactive scatter plot visualization
  - Uses D3.js for visualization and Crossfilter for data manipulation
  - Modular file structure:
    - `index.html` - Main application logic and UI with scatter plot functionality
    - `styles.css` - CSS styling
    - `data-loader.js` - CSV loading and merging functionality
  - Automatically loads all CSV files matching the pattern `mlxbench_v*.csv`

## Development Commands

This is a static site with no build process:
- **Run locally**: Open HTML files directly in a browser or use a simple HTTP server (e.g., `python -m http.server`)
- **Deploy**: Push to the `main` branch - GitHub Pages automatically deploys changes

## Key Implementation Details

The MLX benchmark visualization dynamically loads CSV data files and creates an interactive scatter plot visualization:

### Core Features
- **Interactive Scatter Plot**: Visualizes performance metrics with customizable axes
- **Automatic Data Loading**: Detects and loads all CSV files matching `mlxbench_v*.csv`
- **Tooltips**: Hover over data points to see detailed information
- **Dynamic Filtering**: Filter data using crossfilter for interactive exploration

When adding new benchmark data, simply add a new CSV file as `mlxbench/data/mlxbench_v{n}.csv` and it will be automatically included.