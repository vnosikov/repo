(function() {
  if (!window.app) {
    window.app = {};
  }

  if (!window.app.generateDeputies) {
    window.app.generateDeputies = function() {
      var result = [];
      for (var i=0; i<11; i++) {
        result.push({
          party: 'PC'
        })
      }
      for (var i=0; i<19; i++) {
        result.push({
          party: 'PS'
        })
      }
      for (var i=0; i<17; i++) {
        result.push({
          party: 'PPD'
        })
      }
      for (var i=0; i<23; i++) {
        result.push({
          party: 'DC'
        })
      }
      for (var i=0; i<18; i++) {
        result.push({
          party: 'RN'
        })
      }
      for (var i=0; i<32; i++) {
        result.push({
          party: 'UDI'
        })
      }

      return result;
    }
  }
})();
