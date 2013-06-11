import 'dart:html';
import 'package:js/js.dart' as js;

void main() {
  var context = js.context;
  js.scoped(() {
    var hug = new js.Proxy(context.Hug);
    var result = hug.embrace(10);
    query('#output').text = result;
    
    hug.patBack(new js.Callback.once((msg) {
      query('#output').appendText(' This just in: $msg');
    }));
  });
}
