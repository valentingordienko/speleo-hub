import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DeleteTableOutline.svg';

export function DeleteTableOutline(props: TProps) {
  return (
    <Icon {...props} name="DeleteTableOutline">
      <SVG />
    </Icon>
  );
}
