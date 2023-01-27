import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DeleteOutline.svg';

export function DeleteOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="DeleteOutline">
      <SVG />
    </Icon>
  );
}
