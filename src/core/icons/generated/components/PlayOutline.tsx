import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PlayOutline.svg';

export function PlayOutline(props: TProps) {
  return (
    <Icon {...props} name="PlayOutline">
      <SVG />
    </Icon>
  );
}
