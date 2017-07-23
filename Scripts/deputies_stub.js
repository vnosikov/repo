(function() {
  if (!window.app) {
    window.app = {};
  }

  if (!window.app.generateDeputies) {
    window.app.generateDeputies = function() {
      var result = [];
      for (var i=0; i<11; i++) {
        result.push({
          partido: 'PC',
          nombre: 'Rojo Comunista'
        })
      }
      for (var i=0; i<19; i++) {
        result.push({
          partido: 'PS'
        })
      }
      for (var i=0; i<17; i++) {
        result.push({
          partido: 'PPD'
        })
      }
      for (var i=0; i<23; i++) {
        result.push({
          partido: 'DC'
        })
      }
      for (var i=0; i<18; i++) {
        result.push({
          partido: 'RN'
        })
      }
      for (var i=0; i<32; i++) {
        result.push({
          partido: 'UDI'
        })
      }

      return result;
    }
  }
})();
