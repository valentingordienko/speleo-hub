import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PlayOutline.svg';

export function PlayOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="PlayOutline">
      <SVG />
    </Icon>
  );
}
