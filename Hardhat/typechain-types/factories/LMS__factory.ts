/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { LMS, LMSInterface } from "../LMS";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getStudentById",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "registerStudent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "removeStudent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "students",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isRegistered",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610e028061005f6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806306ead22e1461005c57806312a0b7441461008e5780636af83845146100aa578063c8fb0793146100c6578063f851a440146100f7575b600080fd5b61007660048036038101906100719190610668565b610115565b6040516100859392919061074f565b60405180910390f35b6100a860048036038101906100a391906108c2565b6101d4565b005b6100c460048036038101906100bf9190610668565b61033e565b005b6100e060048036038101906100db9190610668565b610474565b6040516100ee92919061091e565b60405180910390f35b6100ff61059d565b60405161010c919061098f565b60405180910390f35b6001602052806000526040600020600091509050806000018054610138906109d9565b80601f0160208091040260200160405190810160405280929190818152602001828054610164906109d9565b80156101b15780601f10610186576101008083540402835291602001916101b1565b820191906000526020600020905b81548152906001019060200180831161019457829003601f168201915b5050505050908060010154908060020160009054906101000a900460ff16905083565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610262576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025990610a56565b60405180910390fd5b6001600082815260200190815260200160002060020160009054906101000a900460ff16156102c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102bd90610ac2565b60405180910390fd5b60405180606001604052808381526020018281526020016001151581525060016000838152602001908152602001600020600082015181600001908161030c9190610c8e565b506020820151816001015560408201518160020160006101000a81548160ff0219169083151502179055509050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c390610a56565b60405180910390fd5b6001600082815260200190815260200160002060020160009054906101000a900460ff1661042f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042690610dac565b60405180910390fd5b600160008281526020019081526020016000206000808201600061045391906105c1565b60018201600090556002820160006101000a81549060ff0219169055505050565b606060006001600084815260200190815260200160002060020160009054906101000a900460ff166104db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d290610dac565b60405180910390fd5b600160008481526020019081526020016000206000016001600085815260200190815260200160002060010154818054610514906109d9565b80601f0160208091040260200160405190810160405280929190818152602001828054610540906109d9565b801561058d5780601f106105625761010080835404028352916020019161058d565b820191906000526020600020905b81548152906001019060200180831161057057829003601f168201915b5050505050915091509150915091565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5080546105cd906109d9565b6000825580601f106105df57506105fe565b601f0160209004906000526020600020908101906105fd9190610601565b5b50565b5b8082111561061a576000816000905550600101610602565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61064581610632565b811461065057600080fd5b50565b6000813590506106628161063c565b92915050565b60006020828403121561067e5761067d610628565b5b600061068c84828501610653565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156106cf5780820151818401526020810190506106b4565b60008484015250505050565b6000601f19601f8301169050919050565b60006106f782610695565b61070181856106a0565b93506107118185602086016106b1565b61071a816106db565b840191505092915050565b61072e81610632565b82525050565b60008115159050919050565b61074981610734565b82525050565b6000606082019050818103600083015261076981866106ec565b90506107786020830185610725565b6107856040830184610740565b949350505050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6107cf826106db565b810181811067ffffffffffffffff821117156107ee576107ed610797565b5b80604052505050565b600061080161061e565b905061080d82826107c6565b919050565b600067ffffffffffffffff82111561082d5761082c610797565b5b610836826106db565b9050602081019050919050565b82818337600083830152505050565b600061086561086084610812565b6107f7565b90508281526020810184848401111561088157610880610792565b5b61088c848285610843565b509392505050565b600082601f8301126108a9576108a861078d565b5b81356108b9848260208601610852565b91505092915050565b600080604083850312156108d9576108d8610628565b5b600083013567ffffffffffffffff8111156108f7576108f661062d565b5b61090385828601610894565b925050602061091485828601610653565b9150509250929050565b6000604082019050818103600083015261093881856106ec565b90506109476020830184610725565b9392505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006109798261094e565b9050919050565b6109898161096e565b82525050565b60006020820190506109a46000830184610980565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806109f157607f821691505b602082108103610a0457610a036109aa565b5b50919050565b7f4e6f7420616e2041646d696e0000000000000000000000000000000000000000600082015250565b6000610a40600c836106a0565b9150610a4b82610a0a565b602082019050919050565b60006020820190508181036000830152610a6f81610a33565b9050919050565b7f53747564656e7420616c72656164792072656769737465726564000000000000600082015250565b6000610aac601a836106a0565b9150610ab782610a76565b602082019050919050565b60006020820190508181036000830152610adb81610a9f565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610b447fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610b07565b610b4e8683610b07565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610b8b610b86610b8184610632565b610b66565b610632565b9050919050565b6000819050919050565b610ba583610b70565b610bb9610bb182610b92565b848454610b14565b825550505050565b600090565b610bce610bc1565b610bd9818484610b9c565b505050565b5b81811015610bfd57610bf2600082610bc6565b600181019050610bdf565b5050565b601f821115610c4257610c1381610ae2565b610c1c84610af7565b81016020851015610c2b578190505b610c3f610c3785610af7565b830182610bde565b50505b505050565b600082821c905092915050565b6000610c6560001984600802610c47565b1980831691505092915050565b6000610c7e8383610c54565b9150826002028217905092915050565b610c9782610695565b67ffffffffffffffff811115610cb057610caf610797565b5b610cba82546109d9565b610cc5828285610c01565b600060209050601f831160018114610cf85760008415610ce6578287015190505b610cf08582610c72565b865550610d58565b601f198416610d0686610ae2565b60005b82811015610d2e57848901518255600182019150602085019450602081019050610d09565b86831015610d4b5784890151610d47601f891682610c54565b8355505b6001600288020188555050505b505050505050565b7f53747564656e74206e6f7420666f756e64000000000000000000000000000000600082015250565b6000610d966011836106a0565b9150610da182610d60565b602082019050919050565b60006020820190508181036000830152610dc581610d89565b905091905056fea2646970667358221220a118b25c7a7e04e75f95aa6dce87cbd20f97bfd0b92ee2bcf0f07f3ae489e57264736f6c634300081c0033";

type LMSConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LMSConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LMS__factory extends ContractFactory {
  constructor(...args: LMSConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      LMS & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): LMS__factory {
    return super.connect(runner) as LMS__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LMSInterface {
    return new Interface(_abi) as LMSInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): LMS {
    return new Contract(address, _abi, runner) as unknown as LMS;
  }
}
