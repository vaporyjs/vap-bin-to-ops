const test = require('tape')
const binToOps = require('../index.js')

test('delegate call bug', function(t){

  const data = new Buffer('606060405260e060020a60003504637bd703e8811461003157806390b98a111461005c578063f8b2cb4f1461008e575b005b6100b4600435600073f28c53067227848f8145355c455da5cfdd20e3136396e4ee3d6100da84610095565b6100c660043560243533600160a060020a03166000908152602081905260408120548290101561011f57506000610189565b6100b46004355b600160a060020a0381166000908152602081905260409020545b919050565b60408051918252519081900360200190f35b604080519115158252519081900360200190f35b60026040518360e060020a02815260040180838152602001828152602001925050506020604051808303818660325a03f4156100025750506040515191506100af9050565b33600160a060020a0390811660008181526020818152604080832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060015b9291505056', 'hex')
  const ops = binToOps(data)
  const containsDelegateCall = ops.some((op) => op.name === 'DELEGATECALL')
  // ops.map((op,index) => {
  //   console.log(op.pc, data[op.pc], op.name)
  // })

  t.ok(containsDelegateCall, 'detects delegate call')
  t.end()
  // console.log(ops)

})