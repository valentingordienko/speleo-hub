import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DeleteTableOutline.svg';

export function DeleteTableOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="DeleteTableOutline">
      <SVG />
    </Icon>
  );
}
