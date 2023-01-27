import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DeleteDocsOutline.svg';

export function DeleteDocsOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="DeleteDocsOutline">
      <SVG />
    </Icon>
  );
}
