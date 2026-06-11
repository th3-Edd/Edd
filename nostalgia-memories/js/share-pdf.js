/**
 * ==========================================================================
 * UTILERÍAS DE COMPARTIR Y EXPORTACIÓN PDF (share-pdf.js)
 * ==========================================================================
 */

const SharePDFUtils = {
  
  /**
   * Codifica un objeto de datos en una cadena Base64 segura para URLs (UTF-8 compatible)
   * @param {Object} dataObj - El objeto de datos a codificar
   * @returns {string} La cadena codificada en Base64
   */
  encodeData: function(dataObj) {
    try {
      const jsonStr = JSON.stringify(dataObj);
      // UTF-8 a cadena binaria compatible con btoa
      const utf8Bytes = encodeURIComponent(jsonStr).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode(parseInt(p1, 16));
      });
      // Convertir a Base64 y hacerlo seguro para URL reemplazando caracteres conflictivos
      const base64 = btoa(utf8Bytes);
      return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    } catch (e) {
      console.error("Error al codificar los datos del álbum:", e);
      return null;
    }
  },

  /**
   * Decodifica una cadena Base64 segura para URLs a un objeto JS
   * @param {string} base64Str - La cadena codificada
   * @returns {Object|null} El objeto decodificado o null si hay error
   */
  decodeData: function(base64Str) {
    try {
      // Revertir reemplazos URL-safe y rellenar con '='
      let base64 = base64Str.replace(/-/g, '+').replace(/_/g, '/');
      while (base64.length % 4) {
        base64 += '=';
      }
      // Decodificar Base64 a cadena binaria
      const binaryStr = atob(base64);
      // Decodificar cadena binaria a UTF-8
      const jsonStr = decodeURIComponent(Array.prototype.map.call(binaryStr, function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      
      return JSON.parse(jsonStr);
    } catch (e) {
      console.error("Error al decodificar los datos del enlace compartido:", e);
      return null;
    }
  },

  /**
   * Obtiene la URL completa para compartir el álbum actual
   * @param {Object} dataObj - Los datos actuales en LocalStorage
   * @returns {string} URL completa
   */
  generateShareLink: function(dataObj) {
    const encoded = this.encodeData(dataObj);
    if (!encoded) return window.location.href;
    
    // Construir la URL con el hash
    const baseUrl = window.location.origin + window.location.pathname;
    return `${baseUrl}#album=${encoded}`;
  },

  /**
   * Comprueba si la URL actual contiene datos compartidos en el hash
   * @returns {Object|null} Datos decodificados si existen, o null
   */
  getSharedDataFromURL: function() {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#album=')) {
      const encodedStr = hash.substring(7); // Quitar '#album='
      return this.decodeData(encodedStr);
    }
    return null;
  },

  /**
   * Dispara la impresión del navegador adaptada a PDF mediante estilos print.css
   */
  exportToPDF: function() {
    // Al llamar a print(), el navegador aplica automáticamente las reglas @media print de styles.css
    // que formatean el sitio como un libro de recuerdos físico elegante y ocultan los controles UI.
    window.print();
  }
};
