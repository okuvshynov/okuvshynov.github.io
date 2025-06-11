# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a GitHub Pages personal website (okuvshynov.github.io) that hosts an interactive benchmark visualization for LLM inference performance on Apple's MLX framework. It's a static site with no build process required.

## Architecture

The project uses a simple static site structure:
- **Main site**: `index.html` serves as the landing page
- **MLX Benchmark Tool**: Two visualization modes available:
  - `mlxbench/index_aggregated.html` - Standard aggregation and filtering
  - `mlxbench/index_compare.html` - Advanced comparison with dimension-based baselines
  - Uses D3.js for visualization and Crossfilter for data manipulation
  - Modular file structure:
    - `index_aggregated.html` / `index_compare.html` - Main application logic and UI
    - `styles.css` - All CSS styling (shared between both versions)
    - `data-loader.js` - CSV loading and merging functionality
  - Automatically loads all CSV files matching the pattern `mlxbench_v*.csv`
  - Implements multiple baseline comparison strategies

## Development Commands

This is a static site with no build process:
- **Run locally**: Open HTML files directly in a browser or use a simple HTTP server (e.g., `python -m http.server`)
- **Deploy**: Push to the `main` branch - GitHub Pages automatically deploys changes

## Key Implementation Details

The MLX benchmark visualizations dynamically load CSV data files and create interactive tables with advanced features:

### Visualization Modes

**Standard Mode** (`mlxbench/index_aggregated.html`):
- Basic aggregation, filtering, and row-based baseline comparison
- Suitable for general data exploration and analysis

**Advanced Comparison Mode** (`mlxbench/index_compare.html`):
- Includes all standard features plus dimension-based baseline comparison
- Enables sophisticated cross-dimensional performance analysis

### Core Features
- **Baseline Comparison**: Multiple comparison strategies available
- **Color Coding**: Green indicates better performance, red indicates worse (relative to baseline)
- **Automatic Data Loading**: Detects and loads all CSV files matching `mlxbench_v*.csv`

### Baseline Comparison Modes

**Row Baseline** (available in both versions):
- Click any row to set it as baseline for performance comparison
- All other rows compare against this single baseline
- Works with both raw data and aggregated groups

**Dimension Baseline** (advanced mode only):
- Set specific values within grouped dimensions as baselines
- Enables cross-dimensional comparison (e.g., H1 vs H2 hardware within each model)
- Right-click grouped column values to set dimension baselines
- Example: Set "H1" as hardware baseline → (H2,ModelA) compares to (H1,ModelA)

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

**Standard Analysis**:
1. Apply filters first to narrow down data
2. Use "Group By" to aggregate by one or more columns
3. Select aggregation mode (avg/sum/min/max) for numeric columns
4. Click any row (grouped or ungrouped) to set as baseline

**Advanced Cross-Dimensional Comparison** (index_compare.html only):
1. Apply filters and group by multiple columns (e.g., Model + Hardware)
2. Switch to "Dimension Baseline" mode
3. Right-click any grouped column value to set as dimension baseline
4. Each group now compares against its corresponding baseline in that dimension
5. Can set multiple dimension baselines simultaneously for complex comparisons

When adding new benchmark data, simply add a new CSV file as `mlxbench/data/mlxbench_v{n}.csv` and it will be automatically included.