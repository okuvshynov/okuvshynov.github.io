# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a GitHub Pages personal website (okuvshynov.github.io) that hosts an interactive benchmark visualization for LLM inference performance on Apple's MLX framework. It's a static site with no build process required.

## Architecture

The project uses a simple static site structure:
- **Main site**: `index.html` serves as the landing page
- **MLX Benchmark Tool**: `mlxbench/index_aggregated.html` provides an advanced interactive data visualization
  - Uses D3.js for visualization and Crossfilter for data manipulation
  - Modular file structure:
    - `index_aggregated.html` - Main application logic and UI
    - `styles.css` - All CSS styling
    - `data-loader.js` - CSV loading and merging functionality
  - Automatically loads all CSV files matching the pattern `mlxbench_v*.csv`
  - Implements baseline comparison functionality where clicking any row sets it as the comparison baseline

## Development Commands

This is a static site with no build process:
- **Run locally**: Open HTML files directly in a browser or use a simple HTTP server (e.g., `python -m http.server`)
- **Deploy**: Push to the `main` branch - GitHub Pages automatically deploys changes

## Key Implementation Details

The MLX benchmark visualization (`mlxbench/index_aggregated.html`) dynamically loads CSV data files and creates an interactive table with advanced features:

### Core Features
- **Baseline Comparison**: Click any row to set it as baseline for performance comparison
- **Color Coding**: Green indicates better performance, red indicates worse (relative to baseline)
- **Automatic Data Loading**: Detects and loads all CSV files matching `mlxbench_v*.csv`

### Filtering
- **Column Filters**: Click "Filter" button in any column header to show filter controls
- **Multiple Filters**: Apply multiple filters to the same column (AND logic)
- **Operators**: 
  - Numeric columns: =, !=, <, >, <=, >=
  - String columns: =, !=, contains, !contains
- **Filter Management**: Clear button appears when filters are active

### Aggregation
- **Group By**: Available for Model, Hardware, Prompt Tokens, and Generation Tokens columns
- **Multiple Grouping**: Select multiple columns to group by combinations
- **Aggregation Modes**: For numeric metrics when grouped:
  - Average (default)
  - Sum
  - Minimum
  - Maximum
- **Categorical Aggregation**: Shows unique values or count when grouped
- **Row Count**: Displays number of rows aggregated in each group

### Workflow
1. Apply filters first to narrow down data
2. Use "Group By" to aggregate by one or more columns
3. Select aggregation mode (avg/sum/min/max) for numeric columns
4. Click any row (grouped or ungrouped) to set as baseline

When adding new benchmark data, simply add a new CSV file as `mlxbench/data/mlxbench_v{n}.csv` and it will be automatically included.