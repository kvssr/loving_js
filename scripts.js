function test(){
	var t0 = performance.now();
	var items = document.getElementById('message').value;
	var tn = performance.now();	
	print_log('Loading text', (tn - t0));
	
	var filtered= filter_string(items, t0);
	var counted = count_words(filtered, t0);
	print_result(counted, t0);
}

function filter_string(items, t){
	var tn = performance.now();
	print_log('Analysing', (tn - t));
	items = items.toLowerCase().match(/([a-zA-Z]+(-[a-zA-Z])?[a-zA-Z]*)/g);	
	return items;
}

function count_words(items, t){
	console.log('counting words');
	var result = {};
	for (var i = 0; i < items.length; i++) { 	
		result[items[i]] = (result[items[i]] + 1) || 1;
	}	
	return result;
}

function print_result(items, t){
	var words = 0;
	var uniq_words = 0;
	var tn = performance.now();
	print_log('Posting results', (tn - t));
	document.getElementById('result').innerHTML = '';
	for (const item in items){
		document.getElementById('result').innerHTML += item + ': ' + items[item] + '</br>';
		words += items[item];
		uniq_words += 1;
	}
	tn = performance.now();
	print_log('Total words: ' + words, (tn - t));
	var tn = performance.now();
	print_log('Unique words: ' + uniq_words, (tn - t));	
}

function print_log(msg, t){
	document.getElementById('log').innerHTML += t + ' ' + msg + '</br>';
}
