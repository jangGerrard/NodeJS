
//On Once
//process.on('exit', function(code){
//	console.log('exit event ', code);
//});
//
//process.once('exit',function(code){
//	console.log('exit event with once : ', code);
//});
//
//process.emit('exit');
//process.emit('exit', 0 );
//process.emit('exit', 1 );


//처리 하지 않은 익셉션에도 죽지 않아~!
process.on('uncaughtException', function(code){
	console.log('uncaughtExecption');
});

sayHello();


//이벤트! 에러코드 확인 먼저!
emitter.on('event',function(error, result){
	//에러처리
	if(error){
		
	}
	//정상 실행
});