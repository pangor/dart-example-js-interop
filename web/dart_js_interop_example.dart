import 'dart:html';
import 'package:js/js.dart' as js;

void main() {
  var context = js.context;
  
  // use the [] notation to let --minify work
  // see https://github.com/dart-lang/js-interop/issues/86
  var hug = new js.Proxy(context['Hug']);
  var result = hug['embrace'](10);
  query('#output').text = result;
  
//    hug.patBack(new js.Callback.once((msg) {
//      query('#output').appendText(' This just in: $msg');
//    }));
}
