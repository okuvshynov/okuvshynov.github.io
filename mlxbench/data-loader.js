// CSV Data Loading Module
async function loadAllCSVFiles() {
    const allData = [];
    let fileIndex = 0;
    const loadingStatus = d3.select('.info')
        .append('div')
        .style('margin-top', '10px')
        .text('Loading data files...');
    
    // Keep trying to load files until we get a 404
    while (true) {
        try {
            const response = await fetch(`data/mlxbench_v${fileIndex}.csv`);
            if (!response.ok) break;
            
            const text = await response.text();
            const data = d3.csvParse(text);
            
            // Convert numeric columns
            data.forEach(d => {
                d.prompt_tokens = +d.prompt_tokens;
                d.generation_tokens = +d.generation_tokens;
                d.prompt_tps = +d.prompt_tps;
                d.generation_tps = +d.generation_tps;
                d.peak_memory_gb = +d.peak_memory_gb;
                d.source_file = `mlxbench_v${fileIndex}.csv`; // Track which file each row came from
            });
            
            allData.push(...data);
            fileIndex++;
        } catch (error) {
            break;
        }
    }
    
    if (allData.length === 0) {
        loadingStatus.text('No data files found!').style('color', 'red');
        return null;
    }
    
    loadingStatus.text(`Loaded ${fileIndex} file(s) with ${allData.length} total rows`);
    
    return allData;
}