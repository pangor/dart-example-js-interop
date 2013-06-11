import 'dart:html';
import 'package:js/js.dart' as js;

void main() {
  // Grab the context from JS land.
  var context = js.context;
  
  // Use the [] notation to let --minify work.
  // See https://github.com/dart-lang/js-interop/issues/86
  
  // Get a proxy to the JS object.
  var hug = new js.Proxy(context['Hug']);
  
  // Call the embrace method and pass in 10.
  var result = hug['embrace'](10);
  
  query('#output').text = result;
  
  // Call the patBack method and pass in a callback.
  hug['patBack'](new js.Callback.once((msg) {
    query('#output').appendText(' This just in: $msg');
  }));
}
