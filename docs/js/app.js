// Main application logic
class VLESSConverterApp {
    constructor() {
        this.form = document.getElementById('converterForm');
        this.resultCard = document.getElementById('resultCard');
        this.previewCard = document.getElementById('previewCard');
        this.toast = document.getElementById('toast');
        
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.setupLanguageSwitcher();
        
        // Initialize i18n
        i18n.init();
    }

    setupLanguageSwitcher() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                i18n.changeLanguage(lang);
                
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const vlessLink = document.getElementById('vlessLink').value.trim();
        const countryFlag = document.getElementById('countryFlag').value;
        const proxyName = document.getElementById('proxyName').value.trim();
        const configType = document.querySelector('input[name="configType"]:checked').value;

        if (!vlessLink) {
            this.showToast(i18n.t('error_no_link'), 'error');
            return;
        }

        const parsed = VLESSConverter.parse(vlessLink);
        
        if (!parsed) {
            this.showToast(i18n.t('error_invalid_link'), 'error');
            return;
        }

        // Update preview
        Preview.update(parsed);
        this.previewCard.classList.add('active');

        // Generate config
        const name = countryFlag ? `${countryFlag} ${proxyName}` : proxyName;
        const config = VLESSConverter.generate(parsed, name, configType);

        // Show result
        document.getElementById('result').value = config;
        this.resultCard.classList.add('active');
        
        // Smooth scroll to result
        this.resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    showToast(message, type = 'success') {
        this.toast.querySelector('.toast-message').textContent = message;
        this.toast.className = `toast ${type}`;
        this.toast.classList.add('show');
        
        setTimeout(() => {
            this.toast.classList.remove('show');
        }, 3000);
    }
}

// Global functions
function copyResult() {
    const result = document.getElementById('result');
    result.select();
    document.execCommand('copy');
    app.showToast(i18n.t('copied'));
}

function downloadYaml() {
    downloadFile('clash-config.yml');
}

function downloadConf() {
    downloadFile('clash-config.conf');
}

function downloadFile(filename) {
    const content = document.getElementById('result').value;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Initialize app
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new VLESSConverterApp();
})