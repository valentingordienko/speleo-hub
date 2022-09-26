import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TableOutline.svg';

export function TableOutline(props: TProps) {
  return (
    <Icon {...props} name="TableOutline">
      <SVG />
    </Icon>
  );
}
