function undoRedo(object) {
  let undoAllow = false;
  let redoAllow = false;
  let undo = false;
  let redo = false;
  let storage = new Map();
  let count = 0
  storage.set(count, object);

  function UndoLimitException() {
    this.name = 'UndoLimitException';
    this.message =  'cannot undo';
  }

 function RedoLimitException() {
    this.name = 'RedoLimitException';
    this.message =  'cannot redo';
  }

	return {
		set: function(key, value) {
        console.log(key, value, ' set')
      	let newObj = Object.assign({},storage.get(storage.size - 1));
		newObj[key] = value;
		storage.set(storage.size, newObj);
		undoAllow = true;
		undo = false;
		redoAllow = false;
    },
		get: function(key) {
			let last = undo ? storage.get(storage.size - 2) : 			 storage.get(storage.size - 1);
      		return last[key];
    },
		del: function(key) {
			let lastObj = storage.get(storage.size - 1);
      		delete lastObj[key];
			undoAllow = true;
			undo = false;
			redoAllow = false;
    },
		undo: function() {
			if (undo) {
				throw new UndoLimitException();
            };
			if (undoAllow) {
				undo = true;
            }
			redoAllow = true;
			
	},
		redo: function() {
			if (undo) {
				 throw new RedoLimitException();
            };
			if (redoAllow) {
				redo = true;
            }
	}
	};
};