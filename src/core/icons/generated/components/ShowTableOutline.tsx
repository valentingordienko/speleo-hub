import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ShowTableOutline.svg';

export function ShowTableOutline(props: TProps) {
  return (
    <Icon {...props} name="ShowTableOutline">
      <SVG />
    </Icon>
  );
}
