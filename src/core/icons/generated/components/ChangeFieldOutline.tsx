import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChangeFieldOutline.svg';

export function ChangeFieldOutline(props: TProps) {
  return (
    <Icon {...props} name="ChangeFieldOutline">
      <SVG />
    </Icon>
  );
}
