const BatteryModel = require('./battery/model');
const BrushlessMotorModel = require('./brushlessMotor/model');
const PropellerModel = require('./propeller/model');

const create = async (productData) => {
  switch (productData.productType) {
    case 'BRUSHLESS_MOTOR':
      return (new BrushlessMotorModel(productData)).save();

    case 'BATTERY':
      return (new BatteryModel(productData)).save();
    
    case 'PROPELLER':
      return (new PropellerModel(productData)).save();
  
    default:
      throw new Error('product type not found');
  }
};

const getAll = async () => {
  return [
    ...await BatteryModel.find({}),
    ...await BrushlessMotorModel.find({}),
    ...await PropellerModel.find({}),
  ].filter(r => r.productType).map(r => {

    const fields = {
      value: r.value,
      weight: r.weight,
      state: r.state || "N/A"
    }

    switch (r.productType) {
      case 'BATTERY':

        const power = r.cellVol * r.cells * (r.capacity / 1000);

        return {
          description: `Bateria ${r.brand} ${r.capacity}mAh ${r.cells}S ${r.maxDischargeRate}C ${power.toFixed(2)}Wh`,
          ...fields
        }
      case 'BRUSHLESS_MOTOR':
        return {
          description: `Motor brushless ${r.brand} ${r.statorDiameter}${r.statorHeight} ${r.kv}kv`,
          ...fields
        }
      case 'PROPELLER':

        const blades = {
          2: 'bipá',
          3: 'tripá',
          4: 'tetrapá',
          5: 'pentapá',
          6: 'hexapá',
        }[r.blades];

        return {
          description: `Hélice ${r.brand} ${r.diameter}x${r.pitch} ${blades}`,
          ...fields
        }
      default:
        return r;
    }
  });
};

module.exports = {
  create,
  getAll,
};
