import moduleFactory from '../wasm-module/wasm-module.js';

self.onmessage = async () => {
    const module = await moduleFactory({
        noInitialRun: true
    });
    
    console.log('Running threaded WASM function...');

    const result = await module._run_threaded_func();

    console.log('Threaded WASM function result:', result);
};
