// 法的文書テンプレート - メインJavaScript

document.addEventListener('DOMContentLoaded', function() {
    // 目次の自動生成
    generateTableOfContents();
    
    // 言語設定の保存・復元
    restoreLanguagePreference();
    
    // スムーズスクロールの設定
    setupSmoothScrolling();
    
    // アクティブセクションのハイライト
    setupActiveSection();
});

/**
 * 目次の自動生成
 */
function generateTableOfContents() {
    const tocContainer = document.querySelector('.toc ul');
    const headings = document.querySelectorAll('.document h2, .document h3');
    
    if (!tocContainer || headings.length === 0) return;
    
    // 既存の目次をクリア
    tocContainer.innerHTML = '';
    
    headings.forEach((heading, index) => {
        // アンカーIDの設定
        if (!heading.id) {
            heading.id = 'section-' + (index + 1);
        }
        
        // 目次項目の作成
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#' + heading.id;
        a.textContent = heading.textContent;
        
        // h3の場合はインデント
        if (heading.tagName.toLowerCase() === 'h3') {
            a.style.paddingLeft = '1rem';
            a.style.fontSize = '0.9rem';
        }
        
        li.appendChild(a);
        tocContainer.appendChild(li);
    });
}

/**
 * 言語設定の保存・復元
 */
function restoreLanguagePreference() {
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang) {
        // 言語設定に基づくリダイレクトまたはUI更新
        updateLanguageUI(savedLang);
    }
}

function saveLanguagePreference(lang) {
    localStorage.setItem('preferred-language', lang);
}

function updateLanguageUI(lang) {
    const languageLinks = document.querySelectorAll('.language-switch a');
    languageLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-lang') === lang) {
            link.classList.add('active');
        }
    });
}

/**
 * スムーズスクロールの設定
 */
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // URLの更新（履歴に追加せず）
                history.replaceState(null, null, '#' + targetId);
            }
        });
    });
}

/**
 * アクティブセクションのハイライト
 */
function setupActiveSection() {
    const headings = document.querySelectorAll('.document h2[id]');
    const tocLinks = document.querySelectorAll('.toc a');
    
    if (headings.length === 0) return;
    
    function updateActiveSection() {
        let activeHeading = null;
        const navHeight = document.querySelector('.nav').offsetHeight;
        const scrollPosition = window.pageYOffset + navHeight + 50;
        
        // 現在のスクロール位置に基づいてアクティブセクションを決定
        headings.forEach(heading => {
            if (heading.offsetTop <= scrollPosition) {
                activeHeading = heading;
            }
        });
        
        // 目次のアクティブ状態を更新
        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (activeHeading && link.getAttribute('href') === '#' + activeHeading.id) {
                link.classList.add('active');
            }
        });
    }
    
    // スクロールイベントのリスナー設定（スロットリング）
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateActiveSection();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // 初期表示時の設定
    updateActiveSection();
}

/**
 * 言語切り替えハンドラー
 */
function switchLanguage(lang) {
    saveLanguagePreference(lang);
    
    // 現在のページのパスを分析
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/');
    
    // 言語フォルダの検出と置換
    let newPath;
    if (pathParts.includes('en') || pathParts.includes('ja')) {
        // 既存の言語フォルダを新しい言語に置換
        const newPathParts = pathParts.map(part => {
            if (part === 'en' || part === 'ja') {
                return lang;
            }
            return part;
        });
        newPath = newPathParts.join('/');
    } else {
        // ルートレベルから適切な言語フォルダに移動
        const basePath = pathParts.slice(0, -1).join('/');
        const fileName = pathParts[pathParts.length - 1];
        newPath = basePath + '/' + lang + '/' + fileName;
    }
    
    // 新しいURLに移動
    window.location.href = newPath;
}

/**
 * 検索機能（ページ内検索の最適化）
 */
function highlightSearchTerm(term) {
    if (!term) return;
    
    const walker = document.createTreeWalker(
        document.querySelector('.document'),
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    const textNodes = [];
    let node;
    
    while (node = walker.nextNode()) {
        textNodes.push(node);
    }
    
    textNodes.forEach(textNode => {
        const parent = textNode.parentNode;
        if (parent.tagName.toLowerCase() === 'script') return;
        
        const text = textNode.textContent;
        const regex = new RegExp(`(${term})`, 'gi');
        
        if (regex.test(text)) {
            const highlightedHTML = text.replace(regex, '<mark>$1</mark>');
            const wrapper = document.createElement('div');
            wrapper.innerHTML = highlightedHTML;
            
            while (wrapper.firstChild) {
                parent.insertBefore(wrapper.firstChild, textNode);
            }
            parent.removeChild(textNode);
        }
    });
}

/**
 * ダークモード対応（オプション）
 */
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDark ? 'enabled' : 'disabled');
}

// ダークモードの復元
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// グローバル関数をwindowオブジェクトに追加
window.switchLanguage = switchLanguage;
window.toggleDarkMode = toggleDarkMode;
window.highlightSearchTerm = highlightSearchTerm;