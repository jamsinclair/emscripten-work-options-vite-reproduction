
var Module = (() => {
  var _scriptName = import.meta.url;
  
  return (
function(moduleArg = {}) {
  var moduleRtn;

var Module=moduleArg;var readyPromiseResolve,readyPromiseReject;var readyPromise=new Promise((resolve,reject)=>{readyPromiseResolve=resolve;readyPromiseReject=reject});var ENVIRONMENT_IS_WEB=typeof window=="object";var ENVIRONMENT_IS_WORKER=typeof importScripts=="function";var ENVIRONMENT_IS_NODE=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";var ENVIRONMENT_IS_PTHREAD=ENVIRONMENT_IS_WORKER&&self.name=="em-pthread";var moduleOverrides=Object.assign({},Module);var arguments_=[];var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var readAsync,readBinary;if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(typeof document!="undefined"&&document.currentScript){scriptDirectory=document.currentScript.src}if(_scriptName){scriptDirectory=_scriptName}if(scriptDirectory.startsWith("blob:")){scriptDirectory=""}else{scriptDirectory=scriptDirectory.substr(0,scriptDirectory.replace(/[?#].*/,"").lastIndexOf("/")+1)}{if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=url=>fetch(url,{credentials:"same-origin"}).then(response=>{if(response.ok){return response.arrayBuffer()}return Promise.reject(new Error(response.status+" : "+response.url))})}}else{}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.error.bind(console);Object.assign(Module,moduleOverrides);moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];if(ENVIRONMENT_IS_PTHREAD){var wasmPromiseResolve;var wasmPromiseReject;var initializedJS=false;function threadPrintErr(...args){var text=args.join(" ");console.error(text)}if(!Module["printErr"])err=threadPrintErr;function threadAlert(...args){var text=args.join(" ");postMessage({cmd:"alert",text:text,threadId:_pthread_self()})}self.alert=threadAlert;Module["instantiateWasm"]=(info,receiveInstance)=>new Promise((resolve,reject)=>{wasmPromiseResolve=module=>{var instance=new WebAssembly.Instance(module,getWasmImports());receiveInstance(instance);resolve()};wasmPromiseReject=reject});self.onunhandledrejection=e=>{throw e.reason||e};function handleMessage(e){try{var msgData=e["data"];var cmd=msgData["cmd"];if(cmd==="load"){let messageQueue=[];self.onmessage=e=>messageQueue.push(e);self.startWorker=instance=>{postMessage({cmd:"loaded"});for(let msg of messageQueue){handleMessage(msg)}self.onmessage=handleMessage};for(const handler of msgData["handlers"]){if(!Module[handler]||Module[handler].proxy){Module[handler]=(...args)=>{postMessage({cmd:"callHandler",handler:handler,args:args})};if(handler=="print")out=Module[handler];if(handler=="printErr")err=Module[handler]}}wasmMemory=msgData["wasmMemory"];updateMemoryViews();wasmPromiseResolve(msgData["wasmModule"])}else if(cmd==="run"){__emscripten_thread_init(msgData["pthread_ptr"],0,0,1,0,0);__emscripten_thread_mailbox_await(msgData["pthread_ptr"]);establishStackSpace();PThread.receiveObjectTransfer(msgData);PThread.threadInitTLS();if(!initializedJS){initializedJS=true}try{invokeEntryPoint(msgData["start_routine"],msgData["arg"])}catch(ex){if(ex!="unwind"){throw ex}}}else if(cmd==="cancel"){if(_pthread_self()){__emscripten_thread_exit(-1)}}else if(msgData.target==="setimmediate"){}else if(cmd==="checkMailbox"){if(initializedJS){checkMailbox()}}else if(cmd){err(`worker: received unknown command ${cmd}`);err(msgData)}}catch(ex){__emscripten_thread_crashed();throw ex}}self.onmessage=handleMessage}var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var wasmMemory;var wasmModule;var ABORT=false;var EXITSTATUS;var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateMemoryViews(){var b=wasmMemory.buffer;Module["HEAP8"]=HEAP8=new Int8Array(b);Module["HEAP16"]=HEAP16=new Int16Array(b);Module["HEAPU8"]=HEAPU8=new Uint8Array(b);Module["HEAPU16"]=HEAPU16=new Uint16Array(b);Module["HEAP32"]=HEAP32=new Int32Array(b);Module["HEAPU32"]=HEAPU32=new Uint32Array(b);Module["HEAPF32"]=HEAPF32=new Float32Array(b);Module["HEAPF64"]=HEAPF64=new Float64Array(b)}if(!ENVIRONMENT_IS_PTHREAD){if(Module["wasmMemory"]){wasmMemory=Module["wasmMemory"]}else{var INITIAL_MEMORY=Module["INITIAL_MEMORY"]||16777216;wasmMemory=new WebAssembly.Memory({initial:INITIAL_MEMORY/65536,maximum:INITIAL_MEMORY/65536,shared:true});if(!(wasmMemory.buffer instanceof SharedArrayBuffer)){err("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag");if(ENVIRONMENT_IS_NODE){err("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)")}throw Error("bad memory")}}updateMemoryViews()}var __ATPRERUN__=[];var __ATINIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;if(ENVIRONMENT_IS_PTHREAD)return;callRuntimeCallbacks(__ATINIT__)}function postRun(){if(ENVIRONMENT_IS_PTHREAD)return;if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnInit(cb){__ATINIT__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;Module["monitorRunDependencies"]?.(runDependencies)}function removeRunDependency(id){runDependencies--;Module["monitorRunDependencies"]?.(runDependencies);if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}function abort(what){Module["onAbort"]?.(what);what="Aborted("+what+")";err(what);ABORT=true;EXITSTATUS=1;what+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(what);readyPromiseReject(e);throw e}var dataURIPrefix="data:application/octet-stream;base64,";var isDataURI=filename=>filename.startsWith(dataURIPrefix);function findWasmBinary(){if(Module["locateFile"]){var f="wasm-module.wasm";if(!isDataURI(f)){return locateFile(f)}return f}return new URL("wasm-module.wasm",import.meta.url).href}var wasmBinaryFile;function getBinarySync(file){if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}throw"both async and sync fetching of the wasm failed"}function getBinaryPromise(binaryFile){if(!wasmBinary){return readAsync(binaryFile).then(response=>new Uint8Array(response),()=>getBinarySync(binaryFile))}return Promise.resolve().then(()=>getBinarySync(binaryFile))}function instantiateArrayBuffer(binaryFile,imports,receiver){return getBinaryPromise(binaryFile).then(binary=>WebAssembly.instantiate(binary,imports)).then(receiver,reason=>{err(`failed to asynchronously prepare wasm: ${reason}`);abort(reason)})}function instantiateAsync(binary,binaryFile,imports,callback){if(!binary&&typeof WebAssembly.instantiateStreaming=="function"&&!isDataURI(binaryFile)&&typeof fetch=="function"){return fetch(binaryFile,{credentials:"same-origin"}).then(response=>{var result=WebAssembly.instantiateStreaming(response,imports);return result.then(callback,function(reason){err(`wasm streaming compile failed: ${reason}`);err("falling back to ArrayBuffer instantiation");return instantiateArrayBuffer(binaryFile,imports,callback)})})}return instantiateArrayBuffer(binaryFile,imports,callback)}function getWasmImports(){assignWasmImports();return{env:wasmImports,wasi_snapshot_preview1:wasmImports}}function createWasm(){var info=getWasmImports();function receiveInstance(instance,module){wasmExports=instance.exports;registerTLSInit(wasmExports["_emscripten_tls_init"]);wasmTable=wasmExports["__indirect_function_table"];addOnInit(wasmExports["__wasm_call_ctors"]);wasmModule=module;removeRunDependency("wasm-instantiate");return wasmExports}addRunDependency("wasm-instantiate");function receiveInstantiationResult(result){receiveInstance(result["instance"],result["module"])}if(Module["instantiateWasm"]){try{return Module["instantiateWasm"](info,receiveInstance)}catch(e){err(`Module.instantiateWasm callback failed with error: ${e}`);readyPromiseReject(e)}}if(!wasmBinaryFile)wasmBinaryFile=findWasmBinary();instantiateAsync(wasmBinary,wasmBinaryFile,info,receiveInstantiationResult).catch(readyPromiseReject);return{}}function ExitStatus(status){this.name="ExitStatus";this.message=`Program terminated with exit(${status})`;this.status=status}var terminateWorker=worker=>{worker.terminate();worker.onmessage=e=>{}};var killThread=pthread_ptr=>{var worker=PThread.pthreads[pthread_ptr];delete PThread.pthreads[pthread_ptr];terminateWorker(worker);__emscripten_thread_free_data(pthread_ptr);PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker),1);worker.pthread_ptr=0};var cancelThread=pthread_ptr=>{var worker=PThread.pthreads[pthread_ptr];worker.postMessage({cmd:"cancel"})};var cleanupThread=pthread_ptr=>{var worker=PThread.pthreads[pthread_ptr];PThread.returnWorkerToPool(worker)};var spawnThread=threadParams=>{var worker=PThread.getNewWorker();if(!worker){return 6}PThread.runningWorkers.push(worker);PThread.pthreads[threadParams.pthread_ptr]=worker;worker.pthread_ptr=threadParams.pthread_ptr;var msg={cmd:"run",start_routine:threadParams.startRoutine,arg:threadParams.arg,pthread_ptr:threadParams.pthread_ptr};worker.postMessage(msg,threadParams.transferList);return 0};var runtimeKeepaliveCounter=0;var keepRuntimeAlive=()=>noExitRuntime||runtimeKeepaliveCounter>0;var stackSave=()=>_emscripten_stack_get_current();var stackRestore=val=>__emscripten_stack_restore(val);var stackAlloc=sz=>__emscripten_stack_alloc(sz);var proxyToMainThread=(funcIndex,emAsmAddr,sync,...callArgs)=>{var serializedNumCallArgs=callArgs.length;var sp=stackSave();var args=stackAlloc(serializedNumCallArgs*8);var b=args>>3;for(var i=0;i<callArgs.length;i++){var arg=callArgs[i];HEAPF64[b+i]=arg}var rtn=__emscripten_run_on_main_thread_js(funcIndex,emAsmAddr,serializedNumCallArgs,args,sync);stackRestore(sp);return rtn};function _proc_exit(code){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(0,0,1,code);EXITSTATUS=code;if(!keepRuntimeAlive()){PThread.terminateAllThreads();Module["onExit"]?.(code);ABORT=true}quit_(code,new ExitStatus(code))}var handleException=e=>{if(e instanceof ExitStatus||e=="unwind"){return EXITSTATUS}quit_(1,e)};function exitOnMainThread(returnCode){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(1,0,0,returnCode);_exit(returnCode)}var exitJS=(status,implicit)=>{EXITSTATUS=status;if(ENVIRONMENT_IS_PTHREAD){exitOnMainThread(status);throw"unwind"}_proc_exit(status)};var _exit=exitJS;var PThread={unusedWorkers:[],runningWorkers:[],tlsInitFunctions:[],pthreads:{},init(){if(ENVIRONMENT_IS_PTHREAD){PThread.initWorker()}else{PThread.initMainThread()}},initMainThread(){var pthreadPoolSize=navigator.hardwareConcurrency;while(pthreadPoolSize--){PThread.allocateUnusedWorker()}addOnPreRun(()=>{addRunDependency("loading-workers");PThread.loadWasmModuleToAllWorkers(()=>removeRunDependency("loading-workers"))})},initWorker(){noExitRuntime=false},setExitStatus:status=>EXITSTATUS=status,terminateAllThreads__deps:["$terminateWorker"],terminateAllThreads:()=>{for(var worker of PThread.runningWorkers){terminateWorker(worker)}for(var worker of PThread.unusedWorkers){terminateWorker(worker)}PThread.unusedWorkers=[];PThread.runningWorkers=[];PThread.pthreads=[]},returnWorkerToPool:worker=>{var pthread_ptr=worker.pthread_ptr;delete PThread.pthreads[pthread_ptr];PThread.unusedWorkers.push(worker);PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker),1);worker.pthread_ptr=0;__emscripten_thread_free_data(pthread_ptr)},receiveObjectTransfer(data){},threadInitTLS(){PThread.tlsInitFunctions.forEach(f=>f())},loadWasmModuleToWorker:worker=>new Promise(onFinishedLoading=>{worker.onmessage=e=>{var d=e["data"];var cmd=d["cmd"];if(d["targetThread"]&&d["targetThread"]!=_pthread_self()){var targetWorker=PThread.pthreads[d["targetThread"]];if(targetWorker){targetWorker.postMessage(d,d["transferList"])}else{err(`Internal error! Worker sent a message "${cmd}" to target pthread ${d["targetThread"]}, but that thread no longer exists!`)}return}if(cmd==="checkMailbox"){checkMailbox()}else if(cmd==="spawnThread"){spawnThread(d)}else if(cmd==="cleanupThread"){cleanupThread(d["thread"])}else if(cmd==="killThread"){killThread(d["thread"])}else if(cmd==="cancelThread"){cancelThread(d["thread"])}else if(cmd==="loaded"){worker.loaded=true;onFinishedLoading(worker)}else if(cmd==="alert"){alert(`Thread ${d["threadId"]}: ${d["text"]}`)}else if(d.target==="setimmediate"){worker.postMessage(d)}else if(cmd==="callHandler"){Module[d["handler"]](...d["args"])}else if(cmd){err(`worker sent an unknown command ${cmd}`)}};worker.onerror=e=>{var message="worker sent an error!";err(`${message} ${e.filename}:${e.lineno}: ${e.message}`);throw e};var handlers=[];var knownHandlers=["onExit","onAbort","print","printErr"];for(var handler of knownHandlers){if(Module.propertyIsEnumerable(handler)){handlers.push(handler)}}worker.postMessage({cmd:"load",handlers:handlers,wasmMemory:wasmMemory,wasmModule:wasmModule})}),loadWasmModuleToAllWorkers(onMaybeReady){if(ENVIRONMENT_IS_PTHREAD){return onMaybeReady()}let pthreadPoolReady=Promise.all(PThread.unusedWorkers.map(PThread.loadWasmModuleToWorker));pthreadPoolReady.then(onMaybeReady)},allocateUnusedWorker(){var worker;var workerOptions={type:"module",name:"em-pthread"};worker=new Worker(new URL("wasm-module.js",import.meta.url),workerOptions);PThread.unusedWorkers.push(worker)},getNewWorker(){if(PThread.unusedWorkers.length==0){PThread.allocateUnusedWorker();PThread.loadWasmModuleToWorker(PThread.unusedWorkers[0])}return PThread.unusedWorkers.pop()}};var callRuntimeCallbacks=callbacks=>{while(callbacks.length>0){callbacks.shift()(Module)}};var establishStackSpace=()=>{var pthread_ptr=_pthread_self();var stackHigh=HEAPU32[pthread_ptr+52>>2];var stackSize=HEAPU32[pthread_ptr+56>>2];var stackLow=stackHigh-stackSize;_emscripten_stack_set_limits(stackHigh,stackLow);stackRestore(stackHigh)};var wasmTableMirror=[];var wasmTable;var getWasmTableEntry=funcPtr=>{var func=wasmTableMirror[funcPtr];if(!func){if(funcPtr>=wasmTableMirror.length)wasmTableMirror.length=funcPtr+1;wasmTableMirror[funcPtr]=func=wasmTable.get(funcPtr)}return func};var invokeEntryPoint=(ptr,arg)=>{runtimeKeepaliveCounter=0;var result=getWasmTableEntry(ptr)(arg);function finish(result){if(keepRuntimeAlive()){PThread.setExitStatus(result)}else{__emscripten_thread_exit(result)}}finish(result)};var noExitRuntime=Module["noExitRuntime"]||true;var registerTLSInit=tlsInitFunc=>PThread.tlsInitFunctions.push(tlsInitFunc);function pthreadCreateProxied(pthread_ptr,attr,startRoutine,arg){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(2,0,1,pthread_ptr,attr,startRoutine,arg);return ___pthread_create_js(pthread_ptr,attr,startRoutine,arg)}var ___pthread_create_js=(pthread_ptr,attr,startRoutine,arg)=>{if(typeof SharedArrayBuffer=="undefined"){err("Current environment does not support SharedArrayBuffer, pthreads are not available!");return 6}var transferList=[];var error=0;if(ENVIRONMENT_IS_PTHREAD&&(transferList.length===0||error)){return pthreadCreateProxied(pthread_ptr,attr,startRoutine,arg)}if(error)return error;var threadParams={startRoutine:startRoutine,pthread_ptr:pthread_ptr,arg:arg,transferList:transferList};if(ENVIRONMENT_IS_PTHREAD){threadParams.cmd="spawnThread";postMessage(threadParams,transferList);return 0}return spawnThread(threadParams)};var nowIsMonotonic=1;var __emscripten_get_now_is_monotonic=()=>nowIsMonotonic;var __emscripten_init_main_thread_js=tb=>{__emscripten_thread_init(tb,!ENVIRONMENT_IS_WORKER,1,!ENVIRONMENT_IS_WEB,65536,false);PThread.threadInitTLS()};var maybeExit=()=>{if(!keepRuntimeAlive()){try{if(ENVIRONMENT_IS_PTHREAD)__emscripten_thread_exit(EXITSTATUS);else _exit(EXITSTATUS)}catch(e){handleException(e)}}};var callUserCallback=func=>{if(ABORT){return}try{func();maybeExit()}catch(e){handleException(e)}};var __emscripten_thread_mailbox_await=pthread_ptr=>{if(typeof Atomics.waitAsync==="function"){var wait=Atomics.waitAsync(HEAP32,pthread_ptr>>2,pthread_ptr);wait.value.then(checkMailbox);var waitingAsync=pthread_ptr+128;Atomics.store(HEAP32,waitingAsync>>2,1)}};var checkMailbox=()=>{var pthread_ptr=_pthread_self();if(pthread_ptr){__emscripten_thread_mailbox_await(pthread_ptr);callUserCallback(__emscripten_check_mailbox)}};var __emscripten_notify_mailbox_postmessage=(targetThreadId,currThreadId,mainThreadId)=>{if(targetThreadId==currThreadId){setTimeout(checkMailbox)}else if(ENVIRONMENT_IS_PTHREAD){postMessage({targetThread:targetThreadId,cmd:"checkMailbox"})}else{var worker=PThread.pthreads[targetThreadId];if(!worker){return}worker.postMessage({cmd:"checkMailbox"})}};var proxiedJSCallArgs=[];var __emscripten_receive_on_main_thread_js=(funcIndex,emAsmAddr,callingThread,numCallArgs,args)=>{proxiedJSCallArgs.length=numCallArgs;var b=args>>3;for(var i=0;i<numCallArgs;i++){proxiedJSCallArgs[i]=HEAPF64[b+i]}var func=proxiedFunctionTable[funcIndex];PThread.currentProxiedOperationCallerThread=callingThread;var rtn=func(...proxiedJSCallArgs);PThread.currentProxiedOperationCallerThread=0;return rtn};var __emscripten_thread_cleanup=thread=>{if(!ENVIRONMENT_IS_PTHREAD)cleanupThread(thread);else postMessage({cmd:"cleanupThread",thread:thread})};var __emscripten_thread_set_strongref=thread=>{};var warnOnce=text=>{warnOnce.shown||={};if(!warnOnce.shown[text]){warnOnce.shown[text]=1;err(text)}};var _emscripten_check_blocking_allowed=()=>{};var _emscripten_date_now=()=>Date.now();var runtimeKeepalivePush=()=>{runtimeKeepaliveCounter+=1};var _emscripten_exit_with_live_runtime=()=>{runtimeKeepalivePush();throw"unwind"};var _emscripten_get_now;_emscripten_get_now=()=>performance.timeOrigin+performance.now();var abortOnCannotGrowMemory=requestedSize=>{abort("OOM")};var _emscripten_resize_heap=requestedSize=>{var oldSize=HEAPU8.length;requestedSize>>>=0;abortOnCannotGrowMemory(requestedSize)};var printCharBuffers=[null,[],[]];var UTF8Decoder=typeof TextDecoder!="undefined"?new TextDecoder:undefined;var UTF8ArrayToString=(heapOrArray,idx,maxBytesToRead)=>{var endIdx=idx+maxBytesToRead;var endPtr=idx;while(heapOrArray[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&heapOrArray.buffer&&UTF8Decoder){return UTF8Decoder.decode(heapOrArray.buffer instanceof SharedArrayBuffer?heapOrArray.slice(idx,endPtr):heapOrArray.subarray(idx,endPtr))}var str="";while(idx<endPtr){var u0=heapOrArray[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heapOrArray[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heapOrArray[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heapOrArray[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}return str};var printChar=(stream,curr)=>{var buffer=printCharBuffers[stream];if(curr===0||curr===10){(stream===1?out:err)(UTF8ArrayToString(buffer,0));buffer.length=0}else{buffer.push(curr)}};var UTF8ToString=(ptr,maxBytesToRead)=>ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):"";function _fd_write(fd,iov,iovcnt,pnum){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(3,0,1,fd,iov,iovcnt,pnum);var num=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;for(var j=0;j<len;j++){printChar(fd,HEAPU8[ptr+j])}num+=len}HEAPU32[pnum>>2]=num;return 0}PThread.init();var proxiedFunctionTable=[_proc_exit,exitOnMainThread,pthreadCreateProxied,_fd_write];var wasmImports;function assignWasmImports(){wasmImports={__pthread_create_js:___pthread_create_js,_emscripten_get_now_is_monotonic:__emscripten_get_now_is_monotonic,_emscripten_init_main_thread_js:__emscripten_init_main_thread_js,_emscripten_notify_mailbox_postmessage:__emscripten_notify_mailbox_postmessage,_emscripten_receive_on_main_thread_js:__emscripten_receive_on_main_thread_js,_emscripten_thread_cleanup:__emscripten_thread_cleanup,_emscripten_thread_mailbox_await:__emscripten_thread_mailbox_await,_emscripten_thread_set_strongref:__emscripten_thread_set_strongref,emscripten_check_blocking_allowed:_emscripten_check_blocking_allowed,emscripten_date_now:_emscripten_date_now,emscripten_exit_with_live_runtime:_emscripten_exit_with_live_runtime,emscripten_get_now:_emscripten_get_now,emscripten_resize_heap:_emscripten_resize_heap,exit:_exit,fd_write:_fd_write,memory:wasmMemory}}var wasmExports=createWasm();var ___wasm_call_ctors=()=>(___wasm_call_ctors=wasmExports["__wasm_call_ctors"])();var _run_threaded_func=Module["_run_threaded_func"]=()=>(_run_threaded_func=Module["_run_threaded_func"]=wasmExports["run_threaded_func"])();var __emscripten_tls_init=()=>(__emscripten_tls_init=wasmExports["_emscripten_tls_init"])();var _pthread_self=()=>(_pthread_self=wasmExports["pthread_self"])();var __emscripten_thread_init=(a0,a1,a2,a3,a4,a5)=>(__emscripten_thread_init=wasmExports["_emscripten_thread_init"])(a0,a1,a2,a3,a4,a5);var __emscripten_thread_crashed=()=>(__emscripten_thread_crashed=wasmExports["_emscripten_thread_crashed"])();var _emscripten_main_runtime_thread_id=()=>(_emscripten_main_runtime_thread_id=wasmExports["emscripten_main_runtime_thread_id"])();var _emscripten_main_thread_process_queued_calls=()=>(_emscripten_main_thread_process_queued_calls=wasmExports["emscripten_main_thread_process_queued_calls"])();var __emscripten_run_on_main_thread_js=(a0,a1,a2,a3,a4)=>(__emscripten_run_on_main_thread_js=wasmExports["_emscripten_run_on_main_thread_js"])(a0,a1,a2,a3,a4);var __emscripten_thread_free_data=a0=>(__emscripten_thread_free_data=wasmExports["_emscripten_thread_free_data"])(a0);var __emscripten_thread_exit=a0=>(__emscripten_thread_exit=wasmExports["_emscripten_thread_exit"])(a0);var __emscripten_check_mailbox=()=>(__emscripten_check_mailbox=wasmExports["_emscripten_check_mailbox"])();var _emscripten_stack_set_limits=(a0,a1)=>(_emscripten_stack_set_limits=wasmExports["emscripten_stack_set_limits"])(a0,a1);var __emscripten_stack_restore=a0=>(__emscripten_stack_restore=wasmExports["_emscripten_stack_restore"])(a0);var __emscripten_stack_alloc=a0=>(__emscripten_stack_alloc=wasmExports["_emscripten_stack_alloc"])(a0);var _emscripten_stack_get_current=()=>(_emscripten_stack_get_current=wasmExports["emscripten_stack_get_current"])();var dynCall_jiji=Module["dynCall_jiji"]=(a0,a1,a2,a3,a4)=>(dynCall_jiji=Module["dynCall_jiji"]=wasmExports["dynCall_jiji"])(a0,a1,a2,a3,a4);var calledRun;dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function run(){if(runDependencies>0){return}if(ENVIRONMENT_IS_PTHREAD){readyPromiseResolve(Module);initRuntime();startWorker(Module);return}preRun();if(runDependencies>0){return}function doRun(){if(calledRun)return;calledRun=true;Module["calledRun"]=true;if(ABORT)return;initRuntime();readyPromiseResolve(Module);Module["onRuntimeInitialized"]?.();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("")},1);doRun()},1)}else{doRun()}}if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}run();moduleRtn=readyPromise;


  return moduleRtn;
}
);
})();
export default Module;
var isPthread = globalThis.self?.name === 'em-pthread';
// When running as a pthread, construct a new instance on startup
isPthread && Module();
