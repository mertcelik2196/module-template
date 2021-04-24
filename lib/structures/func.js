module.exports = class ModuleName {

constructor(){};

toNumber(number){
if(!number) throw new TypeError("Numara YOK!");
if(typeof number == "number") throw new TypeError("Bu Numara Zatem Number Veri Tipinde!");
return Number(number);
};

};
