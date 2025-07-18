import { BaseClass, CodeGenerator, Interface, Property } from '@winner-fed/nemo-engine';

const fileHeader = `/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA NEMO-ENGINE         ##
 * ##                                                ##
 * ## AUTHOR: cklwblove                              ##
 * ## SOURCE: Pet Store API                          ##
 * ---------------------------------------------------------------
 */

`;

export default class CustomGenerator extends CodeGenerator {
  // 生成 nemo.d.ts 声明
  getInterfaceContentInDeclaration(inter: Interface) {
    const requestParams = inter.getRequestParams();
    const paramsCode = inter.getParamsCode('RequestParams');
    const exportParamsCode = paramsCode.length ? `export ${paramsCode}` : '';
    return `
      ${exportParamsCode}

      export type Response = ${inter.responseType}

      export function request(${requestParams}): Promise<Response>;
    `;
  }

  // baseClass 文件
  getBaseClassInDeclaration(base: BaseClass) {
    const originProps = base.properties;

    base.properties = base.properties.map((prop) => {
      return new Property({
        ...prop,
        required: false
      });
    });

    const result = super.getBaseClassInDeclaration(base);
    base.properties = originProps;

    return result;
  }

  getInterfaceContent(inter: Interface) {
    const method = inter.method.toUpperCase();
    const { url } = inter.pathToUrl;
    const requestParams = inter
      .getRequestParams(this.languageType)
      .replace(/NemoRequestParams/g, 'defs.NemoRequestParams');
    const paramsCode = inter.getParamsCode('RequestParams', this.languageType);

    return `
    ${fileHeader}

    ${this.languageType === 'typeScript' ? "import * as defs from '../../baseClass';" : ''}
    import { NemoCore } from '../../nemoCore';

    ${paramsCode}

   /**
     * @description ${inter.description}
     *
     * @tags ${
       (Array.isArray(inter.tags) && inter.tags.length && inter.tags.join(', ')) || undefined
     }
     * @name ${inter.name}
     * @summary ${inter.summary}
     * @request ${method}:${inter.path}
     */
    export default function request(${requestParams}) {
      return NemoCore.fetch(${url}.trim(), ${inter.getRequestContent()});
    }
   `;
  }
}
