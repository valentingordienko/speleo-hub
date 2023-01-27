import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DeleteDocumentSolid.svg';

export function DeleteDocumentSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="DeleteDocumentSolid">
      <SVG />
    </Icon>
  );
}
