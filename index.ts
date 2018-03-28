
function ViewModelProperty(
    onPropertyChange: (propName: string, newVal: any) => void) {
    return ((target: any, key: string) => {

        // property value
        var _val = target[key];

        // property getter
        var getter = function () {
            return _val;
        };

        // property setter
        var setter = function (newVal: any) {
            if (_val !== newVal) {
                _val = newVal;
                onPropertyChange(key, newVal);
            }
            _val = newVal;
        };

        // Delete property.
        if (delete target[key]) {

            // Create new property with getter and setter
            Object.defineProperty(target, key, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true
            });
        }
    });
}

function onChange(prop: string, val: any): void {
    console.log(`${prop} changed to ${val}!`);
}

export class ViewModel {
    @ViewModelProperty(onChange) public firstName: string = 'No';
    @ViewModelProperty(onChange) public lastName: string = 'Name';
}

let vm = new ViewModel();
vm.firstName = "Jeremy";
vm.lastName = "Likness";
vm.firstName = "J";
vm.lastName = "Likness";