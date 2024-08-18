EMCC = emcc

TARGET = wasm-module
OUT_JS = wasm-module.js
OUT_WASM = $(OUT_JS:.js=.wasm)
OUT_WORKER = $(OUT_JS:.js=.worker.mjs)
ENVIRONMENT = web,worker

SRCS = main.c

.PHONY: all clean

all: $(OUT_JS)

$(OUT_JS):
	$(EMCC) \
	-s USE_PTHREADS=1 \
	-s PTHREAD_POOL_SIZE=navigator.hardwareConcurrency \
	-s ENVIRONMENT=$(ENVIRONMENT) \
	-s EXPORT_ES6=1 \
	-s MODULARIZE=1 \
	-s EXPORTED_FUNCTIONS='["_run_threaded_func"]' \
	-O2 \
	-o $(OUT_JS) $(SRCS)

# Clean up build files
clean:
	rm -f $(TARGET) $(OUT_JS) $(OUT_WASM) $(OUT_WORKER)
