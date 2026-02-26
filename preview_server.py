import http.server
import socketserver
import os

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Clean path from query and hash
        original_path = self.path.split('?')[0].split('#')[0]
        
        # Determine actual file path
        if original_path == '/':
            full_path = 'index.html'
        elif not os.path.exists(os.getcwd() + original_path):
            if os.path.exists(os.getcwd() + original_path + '.html'):
                full_path = original_path + '.html'
            elif os.path.exists(os.getcwd() + original_path + '/index.html'):
                full_path = original_path + '/index.html'
            else:
                full_path = original_path
        else:
            full_path = original_path
            
        # If we changed the path (e.g. /lexa -> /lexa.html), update self.path
        if full_path != original_path:
            # Reconstruct with query string if any
            if '?' in self.path:
                self.path = full_path + '?' + self.path.split('?')[1]
            else:
                self.path = full_path

        return http.server.SimpleHTTPRequestHandler.do_GET(self)

PORT = 8081
# Allow reuse address to avoid "Address already in use"
socketserver.TCPServer.allow_reuse_address = True

with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
    print(f"Serving at port {PORT}")
    httpd.serve_forever()
