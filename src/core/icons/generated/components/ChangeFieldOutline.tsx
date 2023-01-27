import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChangeFieldOutline.svg';

export function ChangeFieldOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ChangeFieldOutline">
      <SVG />
    </Icon>
  );
}
