import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TableOutline.svg';

export function TableOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="TableOutline">
      <SVG />
    </Icon>
  );
}
