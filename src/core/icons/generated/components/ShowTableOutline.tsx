import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ShowTableOutline.svg';

export function ShowTableOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ShowTableOutline">
      <SVG />
    </Icon>
  );
}
