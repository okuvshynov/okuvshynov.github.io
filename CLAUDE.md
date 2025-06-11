# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a GitHub Pages personal website (okuvshynov.github.io) that hosts an interactive benchmark visualization for LLM inference performance on Apple's MLX framework. It's a static site with no build process required.

## Architecture

The project uses a simple static site structure:
- **Main site**: `index.html` serves as the landing page
- **MLX Benchmark Tool**: `mlxbench/index.html` provides an interactive data visualization
  - Uses D3.js for visualization and Crossfilter for data manipulation
  - Automatically loads all CSV files matching the pattern `mlxbench_v*.csv`
  - Implements baseline comparison functionality where clicking any row sets it as the comparison baseline

## Development Commands

This is a static site with no build process:
- **Run locally**: Open HTML files directly in a browser or use a simple HTTP server (e.g., `python -m http.server`)
- **Deploy**: Push to the `main` branch - GitHub Pages automatically deploys changes

## Key Implementation Details

The MLX benchmark visualization (`mlxbench/index.html`) dynamically loads CSV data files and creates an interactive table where:
- Performance metrics are compared against a user-selected baseline
- Color coding indicates performance differences (green = better, red = worse)
- The system automatically detects and loads new CSV files following the naming pattern

When adding new benchmark data, simply add a new CSV file as `mlxbench/data/mlxbench_v{n}.csv` and it will be automatically included.