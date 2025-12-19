// Preview Module
const Preview = {
    update(parsed) {
        document.getElementById('previewServer').textContent = parsed.server;
        document.getElementById('previewPort').textContent = parsed.port;
        document.getElementById('previewUuid').textContent = this.truncateUUID(parsed.uuid);
        document.getElementById('previewSecurity').textContent = parsed.security === 'none' ? 'None' : 'TLS';
        document.getElementById('previewNetwork').textContent = this.getNetworkType(parsed.type);
    },

    truncateUUID(uuid) {
        if (uuid.length > 20) {
            return uuid.substring(0, 8) + '...' + uuid.substring(uuid.length - 8);
        }
        return uuid;
    },

    getNetworkType(type) {
        const types = {
            'tcp': 'TCP',
            'ws': 'WebSocket',
            'grpc': 'gRPC',
            'h2': 'HTTP/2'
        };
        return types[type] || type.toUpperCase();
    }
}
