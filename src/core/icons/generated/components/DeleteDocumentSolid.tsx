import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DeleteDocumentSolid.svg';

export function DeleteDocumentSolid(props: TProps) {
  return (
    <Icon {...props} name="DeleteDocumentSolid">
      <SVG />
    </Icon>
  );
}
