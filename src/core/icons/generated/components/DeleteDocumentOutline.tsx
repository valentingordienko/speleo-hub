import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DeleteDocumentOutline.svg';

export function DeleteDocumentOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="DeleteDocumentOutline">
      <SVG />
    </Icon>
  );
}
