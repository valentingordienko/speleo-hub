import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DeleteDocumentOutline.svg';

export function DeleteDocumentOutline(props: TProps) {
  return (
    <Icon {...props} name="DeleteDocumentOutline">
      <SVG />
    </Icon>
  );
}
